import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function FormStatus() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('https://jec.edu.np/api/application-forms/', {
          headers: {
            'Authorization': `Token ${token}`,
          },
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
  const handlePrint = () => {
    window.print();
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <React.Fragment>
      <div className="p-5 printable-area">
        <div className="max-w-4xl mx-auto">
          <div className="mb-5 text-center">
            <h1 className="font-serif text-2xl text-blue-600">APPLICATION FORM</h1>
          </div>

          <div className="relative flex flex-col mb-8 lg:flex-row lg:gap-8">
            {/* User credentials on the left, image on the right on large screens */}
            <div className="w-full mb-4 lg:w-2/3 lg:pr-8 lg:mb-0">
              <div className="space-y-2">
                <div className="font-serif text-base">
                  <strong>Full Name:</strong> {formData.full_name || 'N/A'}
                </div>
                <div className="font-serif text-base">
                  <strong>Date of Birth:</strong> {formData.date_of_birth || 'N/A'}
                </div>
                <div className="font-serif text-base">
                  <strong>Address:</strong> {formData.address || 'N/A'}
                </div>
                <div className="font-serif text-base">
                  <strong>Gender:</strong> {formData.gender === 'M' ? 'Male' : formData.gender === 'F' ? 'Female' : formData.gender === 'O' ? 'Others' : 'N/A'}
                </div>
                <div className="font-serif text-base">
                  <strong>The Interested Course is:</strong>
                  {formData.interested_course === 'civil' ? 'B.E Civil' : formData.interested_course === 'computer' ? 'B.E Computer' : formData.interested_course === 'electronics' ? 'B.E Electronics' : 'N/A'}
                </div>
                <div className="font-serif text-base">
                  <strong>IOE Entrance Symbol.No:</strong> {formData.ioe_roll_no || 'N/A'}
                </div>
                <div className="font-serif text-base">
                  <strong>IOE Rank:</strong> {formData.ioe_rank || 'N/A'}
                </div>
              </div>
            </div>

            <div className="w-full mb-4 lg:w-1/3 lg:mb-0 lg:ml-auto">
              <img
                src={formData.photo || '/path/to/default-image.jpg'}
                alt="User Photo"
                className="object-cover w-full h-48 rounded-md"
                style={{ height: '200px', width: '200px' }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="mb-3 font-serif text-xl">+2 Certificate</h2>
            <div className="space-y-2">
              <div className="font-serif text-base">
                <strong>Transcript:</strong>{' '}
                <a href={formData.transcript || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  View Transcript
                </a>
              </div>
              <div className="font-serif text-base">
                <strong>Migration:</strong>{' '}
                <a href={formData.migration || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  View Migration Certificate
                </a>
              </div>
              <div className="font-serif text-base">
                <strong>Character:</strong>{' '}
                <a href={formData.character || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  View Character Certificate
                </a>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="mb-3 font-serif text-xl">Undertaking and Signature</h2>
            <p className="font-serif text-base">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement || false}
                className="mr-2"
                readOnly
              />
              I hereby declare that the particulars furnished in this application form are correct and true and I fully agree to whatever actions taken as per rules and regulations of JEC Kupondole if found false or incorrect.
            </p>
          </div>

          {formData && Object.keys(formData).length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 text-left border">FormId</th>
                    <th className="p-2 text-left border">Name</th>
                    <th className="p-2 text-left border">Interested Program</th>
                    <th className="p-2 text-left border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">{formData.id || 'N/A'}</td>
                    <td className="p-2 border">{formData.full_name || 'N/A'}</td>
                    <td className="p-2 border">
                      {formData.interested_course === 'civil'
                        ? 'B.E Civil'
                        : formData.interested_course === 'computer'
                        ? 'B.E Computer'
                        : formData.interested_course === 'electronics'
                        ? 'B.E Electronics'
                        : 'N/A'}
                    </td>
                    <td className="p-2 border">{formData.status || 'Pending'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-8 text-center">
            <button type="button" onClick={handlePrint} className="px-4 py-2 text-white bg-blue-600 rounded">
              Print
            </button>
         <p className='pt-4 font-bold text-red-600'>  NOTE:PLEASE BRING THE COLOR PRINTED FORM DURING THE TIME OF ADMISSION.</p> 
          </div>
        </div>
      </div>
      <style jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .printable-area,
          .printable-area * {
            visibility: visible;
          }
          .printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 0;
          }
          .absolute {
            position: absolute;
            top: 0;
            right: 0;
            width: 200px; /* Adjust as needed */
          }
          .text-center {
            display: none;
          }
        }
      `}</style>
    </React.Fragment>
  );
}