import './CourseCreate.css';
import { MdOndemandVideo } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { BsClipboardData } from "react-icons/bs";
import { useState } from 'react';
import axios from 'axios';

export default function CourseCreate() {
  const navigate = useNavigate(); // Hook to navigate between pages
  const [activeIcon, setActiveIcon] = useState('video'); // State to track the active icon
  const [courseName, setCourseName] = useState('');
  const [subcategoryId, setSubcategoryId] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [whatYouWillLearn, setWhatYouWillLearn] = useState('');
  const [isFree, setIsFree] = useState(false);
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState([]);
  const [whoThisCourseIsFor, setWhoThisCourseIsFor] = useState('');

  const handleIconClick = (icon) => {
    setActiveIcon(icon); // Update active icon state
  };

  const handleUploadCourse = async (e) => {
    e.preventDefault();

    // Prepare form data for media upload
    const mediaFormData = new FormData();
    mediaFormData.append('ImageFile', imageFile);
    if (videoFile) {
      mediaFormData.append('VideoFile', videoFile);
    }
    mediaFormData.append('CourseId', 'your_course_id_here'); // Set your course ID accordingly

    try {
      await axios.patch(`your_api_url_here/${courseId}/upload`, mediaFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Media uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert('Error uploading media.');
    }

    // Prepare course data for creation
    const courseData = {
      Name: courseName,
      Description: description,
      LongDescription: longDescription,
      WhatYouWillLearn: whatYouWillLearn,
      Price: isFree ? 0 : price,
      IsFree: isFree,
      Tags: tags,
      WhoThisCourseIsFor: whoThisCourseIsFor,
      SubcategoryId: parseInt(subcategoryId),
      CourseContent: {
        Sections: [
          {
            Title: 'Section Title', // Replace with dynamic content as needed
            Lessons: [{ Title: 'Lesson Title', Timestamp: '00:00:00' }],
          },
        ],
      },
    };

    try {
      await axios.post('your_api_url_here/create', courseData);
      alert('Course created successfully!');
    } catch (error) {
      console.error(error);
      alert('Error creating course.');
    }
  };

  return (
    <div className="course-create-container">
      {/* Sidebar section */}
      <div className="course-create-sidebar">
        <div className="course-create-logo-container">
          <span className="course-create-logo-text">Eureka</span>
          <div className='instructor-course-icons'>
            {/* First Row: Video Courses */}
            <div
              className={`instructor-course-row ${activeIcon === 'video' ? 'active' : ''}`}
              onClick={() => handleIconClick('video')}
            >
              <MdOndemandVideo className="course-create-icon" />
              <span className='category'>Courses</span>
            </div>

            {/* Second Row: Performance Data */}
            <div
              className={`instructor-course-row ${activeIcon === 'data' ? 'active' : ''}`}
              onClick={() => handleIconClick('data')}
            >
              <BsClipboardData className="course-create-data" />
              <span className='category'>Performance</span>
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
              <input className='inputClass'
                placeholder="Enter category here"
                value={subcategoryId} onChange={(e) => setSubcategoryId(e.target.value)} required>
              </input>
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
              {/* Image upload section */}
              <div className="upload-section">
                <p className="alias">Image</p>
                <label htmlFor="imageUpload" className="custom-file-upload">
                  Choose Image:    <input
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
                    document.getElementById('imageFileName').value = e.target.files[0]?.name || ''; // Display file name in the input
                  }}
                  required
                  style={{ display: 'none' }}
                />


              </div>

              {/* Video upload section */}
              <div className="upload-section">
                <p className="alias">Video</p>
                <label htmlFor="videoUpload" className="custom-file-upload">
                  Choose Video
                </label>
                <input
                  id="videoUpload"
                  type="file"
                  accept="video/*"
                  onChange={(e) => setVideoFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>
            </div>
            
            <div>
              <p className='alias'>Long Description</p>
              <textarea
                className='inputClass'
                placeholder="Enter long course description"
                value={longDescription}
                onChange={(e) => setLongDescription(e.target.value)}
              />
            </div>
            <div>
              <p className='alias'>What You Will Learn</p>
              <textarea
                className='inputClass'
                placeholder="Enter what students will learn"
                value={whatYouWillLearn}
                onChange={(e) => setWhatYouWillLearn(e.target.value)}
              />
            </div>
            <div>
              <p className='alias'>Price</p>
              <input

                type="number"
                placeholder="Enter course price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                disabled={isFree}
              />
              <label>
                <input
                  type="checkbox"
                  checked={isFree}
                  onChange={(e) => setIsFree(e.target.checked)}
                />
                Free
              </label>
            </div>
            <div>
              <p className='alias'>Tags</p>
              <input
                type="text"
                className='inputClass'
                placeholder="Enter tags separated by commas"
                onChange={(e) => setTags(e.target.value.split(','))}
              />
            </div>
            <div>
              <p className='alias'>Who This Course Is For</p>
              <textarea
                className='inputClass'
                placeholder="Enter the target audience"
                value={whoThisCourseIsFor}
                onChange={(e) => setWhoThisCourseIsFor(e.target.value)}
              />
            </div>


            <button className="course-submit">Save</button>
          </form>
        </main>
      </div>
    </div>
  );
}
