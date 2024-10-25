import './CourseCreate.css';
import { MdOndemandVideo } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { BsClipboardData } from "react-icons/bs";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from '../utils/auth';
import { VscSignIn, VscSignOut } from "react-icons/vsc";


export default function CourseCreate() {
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState('video');
  const [courseName, setCourseName] = useState('');
  const [subcategoryId, setSubcategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [whatYouWillLearn, setWhatYouWillLearn] = useState('');
  const [isFree, setIsFree] = useState(false);
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState(['']); // Changed to array for tags
  const [whoThisCourseIsFor, setWhoThisCourseIsFor] = useState('');
  const [sections, setSections] = useState([{ title: '', lessons: [{ title: '', timestamp: '00:00:00' }] }]); // Initial section
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    const token = getToken(); 
    // Fetch categories on component mount
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://localhost:7143/api/Category', {
          headers: {
            Authorization: `Bearer ${token}`, // Include token
          },
        });
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = async (e) => {
    const selectedCategoryId = e.target.value;
    setSubcategoryId(''); // Reset subcategory when category changes

    // Fetch subcategories for the selected category
    if (selectedCategoryId) {
      try {
        const response = await axios.get(`https://localhost:7143/api/Category/${selectedCategoryId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Include token
          },
        });
        setSubcategories(response.data.subcategories); // Adjust this based on your API response
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    } else {
      setSubcategories([]); // Clear subcategories if no category is selected
    }
  };

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  const handleUploadCourse = async (e) => {
    e.preventDefault();

    // Step 1: Create the course
    const courseData = {
        name: courseName,
        description,
        longDescription,
        whatYouWillLearn,
        price: isFree ? 0 : price,
        isFree,
        tags,
        whoThisCourseIsFor,
        subcategoryId: parseInt(subcategoryId),
        courseContent: {
            sections,
        },
    };

    try {
        const response = await axios.post('https://localhost:7143/api/Course/create', courseData, {
            headers: {
                Authorization: `Bearer ${token}`, // Include token
            },
        });
        
        // Step 2: Upload media files
        const courseId = response.data.id; // Assuming the response contains the created course's ID
        
        const mediaFormData = new FormData();
        mediaFormData.append('ImageFile', imageFile);
        if (videoFile) {
            mediaFormData.append('VideoFile', videoFile);
        }

        await axios.patch(`https://localhost:7143/api/Course/${courseId}/upload`, mediaFormData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`, // Include token
            },
        });
        alert('Media uploaded successfully!');

        // Redirect after successful creation and upload
        alert('Course created successfully!');
        navigate('/courses'); // Redirect after successful creation
    } catch (error) {
        console.error(error);
        alert('Error creating course or uploading media.');
    }
};

  const handleAddSection = () => {
    setSections([...sections, { title: '', lessons: [{ title: '', timestamp: '' }] }]);
  };

  const handleRemoveSection = (index) => {
    const updatedSections = sections.filter((_, i) => i !== index);
    setSections(updatedSections);
  };

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  const handleAddLesson = (sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].lessons.push({ title: '', timestamp: '' });
    setSections(updatedSections);
  };

  const handleRemoveLesson = (sectionIndex, lessonIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].lessons = updatedSections[sectionIndex].lessons.filter((_, i) => i !== lessonIndex);
    setSections(updatedSections);
  };

  const handleLessonChange = (sectionIndex, lessonIndex, field, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].lessons[lessonIndex][field] = value;
    setSections(updatedSections);
  };
  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem('token'); // Remove token on logout
      sessionStorage.removeItem('token'); // Also remove from sessionStorage
      setIsLoggedIn(false); // Update state to logged out
      navigate('/login'); // Redirect to login page
    } else {
      navigate('/login'); // Redirect to login page if not logged in
    }
  };

  return (
    <div className="course-create-container">
      <div className="course-create-sidebar">
        <div className="course-create-logo-container">
          <span className="course-create-logo-text">Eureka</span>
          <div className='instructor-course-icons'>
            <div
              className={`instructor-course-row ${activeIcon === 'video' ? 'active' : ''}`}
              onClick={() => handleIconClick('video')}
            >
              <MdOndemandVideo className="course-create-icon" />
              <span className='category'>Courses</span>
            </div>
            <div
              className={`instructor-course-row ${activeIcon === 'data' ? 'active' : ''}`}
              onClick={() => handleIconClick('data')}>
              <BsClipboardData className="course-create-data" />
              <span className='category'>Performance</span>
            </div>
            <div className="instructor-courses-footer">
            <div
              className="instructor-course-row logout-row"
              onClick={handleLoginLogout}
            >
              {/* Conditionally render the sign-in or sign-out icon */}
              {isLoggedIn ? (
                <VscSignOut className="instructor-courses-icon" />  // Display VscSignOut if logged in
              ) : (
                <VscSignIn className="instructor-courses-icon" />  // Display VscSignIn if not logged in
              )}
              <span className="category">{isLoggedIn ? 'Logout' : 'Login'}</span>
            </div>
          </div>

</div>
        </div>
      </div>

      <div className="instructor-intro-container">
        <header className="course-intro-header">
          <h1 className='course-intro-header1'>Create Course</h1>
        </header>

        <main className="instructor-intro-content">
          <p className='ready'>Ready to inspire? Start creating your course now!</p>
          <form className="create-course-prompt" onSubmit={handleUploadCourse}>
            <div className='course-category'>
              <div className='course-category-name'>
                <p className='alias'>Category</p>
              </div>
              <select className='inputClass' onChange={handleCategoryChange} required>
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            <div className='course-category'>
              <div className='course-category-name'>
                <p className='alias'>Subcategory</p>
              </div>
              <select className='inputClass' value={subcategoryId} onChange={(e) => setSubcategoryId(e.target.value)} required>
                <option value="">Select a subcategory</option>
                {subcategories.map(subcategory => (
                  <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
                ))}
              </select>
            </div>

            <div className='course-title'>
              <p className='alias'>Title</p>
              <input className='inputClass'
                type="text"
                placeholder="Enter course title here"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required
              />
            </div>
            <div>
              <p className='alias'>Description</p>
              <textarea className='inputClass'
                placeholder="Enter course description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="flex-container">
              <div className="upload-section">
                <p className="alias">Image</p>
                <label htmlFor="imageUpload" className="custom-file-upload">
                  Choose Image: 
                  <input
                    id="imageFileName"
                    type="text"
                    className="file-name-input"
                    value={imageFile?.name || ''}
                    readOnly
                  />
                </label>
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    setImageFile(e.target.files[0]);
                    document.getElementById('imageFileName').value = e.target.files[0]?.name || '';
                  }}
                  required
                  style={{ display: 'none' }}
                />
              </div>

              <div className="upload-section">
                <p className="alias">Video</p>
                <label htmlFor="videoUpload" className="custom-file-upload">
                  Choose Video: 
                  <input
                    id="videoFileName"
                    type="text"
                    className="file-name-input"
                    value={videoFile?.name || ''}
                    readOnly
                  />
                </label>
                <input
                  id="videoUpload"
                  type="file"
                  accept="video/*"
                  onChange={(e) => {
                    setVideoFile(e.target.files[0]);
                    document.getElementById('videoFileName').value = e.target.files[0]?.name || '';
                  }}
                  style={{ display: 'none' }}
                />
              </div>
            </div>

            <div className='course-long-description'>
              <p className='alias'>Long Description</p>
              <textarea className='inputClass'
                placeholder="Enter long course description"
                value={longDescription}
                onChange={(e) => setLongDescription(e.target.value)}
                required
              />
            </div>

            <div className='course-what-you-will-learn'>
              <p className='alias'>What You'll Learn</p>
              <textarea className='inputClass'
                placeholder="Outline what students will learn"
                value={whatYouWillLearn}
                onChange={(e) => setWhatYouWillLearn(e.target.value)}
                required
              />
            </div>

              <p className='alias'>Price</p>
            <div className='course-price-free'>
              <input
                className='inputClass'
                type="number"
                placeholder="Enter course price"
                value={isFree ? 0 : price}
                onChange={(e) => setPrice(e.target.value)}
                disabled={isFree}
                required
              />
              <label className='free-course-button'>
                <input
                  type="checkbox"
                  checked={isFree}
                  onChange={() => setIsFree(!isFree)}
                />
                Free Course
              </label>
            </div>

            <div className='course-tags'>
              <p className='alias'>Tags</p>
              <input
                className='inputClass'
                type="text"
                placeholder="Add tags separated by commas"
                value={tags.join(', ')} // Display tags as a comma-separated string
                onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))} // Update tags based on input
              />
            </div>

            <div className='course-who-is-it-for'>
              <p className='alias'>Who is this course for?</p>
              <textarea className='inputClass'
                placeholder="Specify who should take this course"
                value={whoThisCourseIsFor}
                onChange={(e) => setWhoThisCourseIsFor(e.target.value)}
                required
              />
            </div>

            <div className='section-container'>
              <h3 className='alias'>Course Sections</h3>
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="section-item">
                  <div>
                    <input
                    className="section-item-input"
                      type="text"
                      placeholder="Section Title"
                      value={section.title}
                      onChange={(e) => handleSectionChange(sectionIndex, 'title', e.target.value)}
                      required
                    />
                    <button className="section-item-button" type="button" onClick={() => handleRemoveSection(sectionIndex)}>Remove Section</button>
                  </div>

                  <h4 className='alias'>Lessons</h4>
                  {section.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="lesson-item">
                      <input
                      className="lesson-item-input"
                        type="text"
                        placeholder="Lesson Title"
                        value={lesson.title}
                        onChange={(e) => handleLessonChange(sectionIndex, lessonIndex, 'title', e.target.value)}
                        required
                      />
                      <input
                      className="lesson-item-time"
                        type="text"
                        placeholder="Timestamp (e.g., 00:10:30)"
                        value={lesson.timestamp}
                        onChange={(e) => handleLessonChange(sectionIndex, lessonIndex, 'timestamp', e.target.value)}
                      />
                      <button className="lesson-item-button" type="button" onClick={() => handleRemoveLesson(sectionIndex, lessonIndex)}>Remove Lesson</button>
                    </div>
                  ))}
                  <button className="add-item-button" type="button" onClick={() => handleAddLesson(sectionIndex)}>Add Lesson</button>
                </div>
              ))}
              <button  className="add-item-button"type="button" onClick={handleAddSection}>Add Section</button>
            </div>



            <button type="submit" className="create-course-button">Create Course</button>
          </form>
        </main>
      </div>
    </div>
  );
}
