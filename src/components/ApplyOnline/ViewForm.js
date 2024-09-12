import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ViewForm() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newDocuments, setNewDocuments] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('https://jec.edu.np/api/application-forms/', {
          headers: { Authorization: `Token ${token}` },
        });

        const latestForm = response.data.length > 0 ? response.data[response.data.length - 1] : {};
        setFormData(latestForm);
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFormData();
  }, []);

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setIsEditing(false);
    setNewDocuments({});
  };

  const handleSave = async () => {
    setSaving(true);
    const formDataToSend = new FormData();

    // Append user details to FormData
    for (const key in formData) {
      if (key !== 'photo' && key !== 'transcript' && key !== 'migration' && key !== 'character') {
        formDataToSend.append(key, formData[key]);
      }
    }

    // Append new files to FormData
    for (const key in newDocuments) {
      formDataToSend.append(key, newDocuments[key]);
    }

    try {
      const token = localStorage.getItem('authToken');
      const formId = formData.id; // Ensure you have the form ID to update
      const response = await axios.patch(`jec.edu.np/api/application-forms/${formId}/`, formDataToSend, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setFormData(response.data);
      setIsEditing(false);
      setNewDocuments({});
    } catch (error) {
      setError(error.response ? error.response.data : error.message);
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setNewDocuments({
      ...newDocuments,
      [e.target.name]: e.target.files[0],
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex items-center justify-center min-h-screen p-5'>
      <div className='w-full max-w-lg sm:w-full md:max-w-2xl'>
        <div className='mb-5 text-center md:text-left'>
          <h1 className='font-serif text-2xl text-blue-600'>VIEW AND EDIT APPLICATION FORM</h1>
        </div>

        <div className='relative mb-8'>
          <div className='flex flex-col gap-4'>
            <div className='space-y-2'>
              {/* Full Name */}
              <div className='font-serif text-base'>
                <strong>Full Name:</strong>
                {isEditing ? (
                  <input
                    type='text'
                    name='full_name'
                    value={formData.full_name || ''}
                    onChange={handleChange}
                    className='w-full p-1 ml-2 border rounded'
                  />
                ) : (
                  ` ${formData.full_name || 'N/A'}`
                )}
              </div>

              {/* Date of Birth */}
              <div className='font-serif text-base'>
                <strong>Date of Birth:</strong>
                {isEditing ? (
                  <input
                    type='date'
                    name='date_of_birth'
                    value={formData.date_of_birth || ''}
                    onChange={handleChange}
                    className='w-full p-1 ml-2 border rounded'
                  />
                ) : (
                  ` ${formData.date_of_birth || 'N/A'}`
                )}
              </div>

              {/* Address */}
              <div className='font-serif text-base'>
                <strong>Address:</strong>
                {isEditing ? (
                  <input
                    type='text'
                    name='address'
                    value={formData.address || ''}
                    onChange={handleChange}
                    className='w-full p-1 ml-2 border rounded'
                  />
                ) : (
                  ` ${formData.address || 'N/A'}`
                )}
              </div>

              {/* Gender */}
              <div className='font-serif text-base'>
                <strong>Gender:</strong>
                {isEditing ? (
                  <select
                    name='gender'
                    value={formData.gender || ''}
                    onChange={handleChange}
                    className='w-full p-1 ml-2 border rounded'
                  >
                    <option value='M'>Male</option>
                    <option value='F'>Female</option>
                    <option value='O'>Others</option>
                  </select>
                ) : (
                  ` ${formData.gender === 'M' ? 'Male' : formData.gender === 'F' ? 'Female' : formData.gender === 'O' ? 'Others' : 'N/A'}`
                )}
              </div>

              {/* Interested Course */}
              <div className='font-serif text-base'>
                <strong>Interested Course:</strong>
                {isEditing ? (
                  <select
                    name='interested_course'
                    value={formData.interested_course || ''}
                    onChange={handleChange}
                    className='w-full p-1 ml-2 border rounded'
                  >
                    <option value='civil'>B.E Civil</option>
                    <option value='computer'>B.E Computer</option>
                    <option value='electronics'>B.E Electronics</option>
                  </select>
                ) : (
                  ` ${formData.interested_course === 'civil' ? 'B.E Civil' : formData.interested_course === 'computer' ? 'B.E Computer' : formData.interested_course === 'electronics' ? 'B.E Electronics' : 'N/A'}`
                )}
              </div>

              {/* IOE Entrance Symbol.No */}
              <div className='font-serif text-base'>
                <strong>IOE Entrance Symbol.No:</strong>
                {isEditing ? (
                  <input
                    type='text'
                    name='ioe_roll_no'
                    value={formData.ioe_roll_no || ''}
                    onChange={handleChange}
                    className='w-full p-1 ml-2 border rounded'
                  />
                ) : (
                  ` ${formData.ioe_roll_no || 'N/A'}`
                )}
              </div>

              {/* IOE Rank */}
              <div className='font-serif text-base'>
                <strong>IOE Rank:</strong>
                {isEditing ? (
                  <input
                    type='text'
                    name='ioe_rank'
                    value={formData.ioe_rank || ''}
                    onChange={handleChange}
                    className='w-full p-1 ml-2 border rounded'
                  />
                ) : (
                  ` ${formData.ioe_rank || 'N/A'}`
                )}
              </div>
            </div>

            <div className='relative mb-5'>
              {isEditing ? (
                <div className='space-y-2'>
                  <div>
                    <strong>Photo:</strong>
                    <input
                      type='file'
                      name='photo'
                      onChange={handleFileChange}
                      className='w-full p-1 ml-2 border rounded'
                    />
                  </div>
                  <div>
                    <strong>Transcript:</strong>
                    <input
                      type='file'
                      name='transcript'
                      onChange={handleFileChange}
                      className='w-full p-1 ml-2 border rounded'
                    />
                  </div>
                  <div>
                    <strong>Migration Certificate:</strong>
                    <input
                      type='file'
                      name='migration'
                      onChange={handleFileChange}
                      className='w-full p-1 ml-2 border rounded'
                    />
                  </div>
                  <div>
                    <strong>Character Certificate:</strong>
                    <input
                      type='file'
                      name='character'
                      onChange={handleFileChange}
                      className='w-full p-1 ml-2 border rounded'
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <p>
                    <strong>Photo:</strong>{' '}
                    <a href={formData.photo || '#'} target='_blank' rel='noopener noreferrer'>
                      View Photo
                    </a>
                  </p>
                  <p>
                    <strong>Transcript:</strong>{' '}
                    <a href={formData.transcript || '#'} target='_blank' rel='noopener noreferrer'>
                      View Transcript
                    </a>
                  </p>
                  <p>
                    <strong>Migration Certificate:</strong>{' '}
                    <a href={formData.migration || '#'} target='_blank' rel='noopener noreferrer'>
                      View Migration Certificate
                    </a>
                  </p>
                  <p>
                    <strong>Character Certificate:</strong>{' '}
                    <a href={formData.character || '#'} target='_blank' rel='noopener noreferrer'>
                      View Character Certificate
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {isEditing ? (
          <div className='flex justify-between'>
            <button onClick={handleCancel} className='px-4 py-2 text-lg font-semibold text-white bg-red-600 rounded hover:bg-red-700'>
              Cancel
            </button>
            <button
              onClick={handleSave}
              className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded  text-lg font-semibold ${saving && 'opacity-50 cursor-not-allowed'}`}
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        ) : (
          <div className='flex items-center justify-center my-2 md:justify-start md:items-start '>
            <button onClick={handleEdit} className='flex items-center justify-center px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded hover:bg-blue-700'>
            Edit
          </button>
          </div>
        )}

        <div className='flex items-center justify-center my-3 text-lg font-semibold text-red-600'>
          <Link to='/formstatus'>View your form status</Link>
        </div>
      </div>
    </div>
  );
}
