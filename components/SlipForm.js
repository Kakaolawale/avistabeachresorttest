import { useState } from 'react';

const Slipform = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    console.log(selectedFile)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setError('Please select a file');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('paymentslip', file);

      const response = await fetch('/api/paymentslip', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError('Error uploading payment slip');
      }
    } catch (error) {
      setError('Error uploading payment slip');
    }

    setLoading(false);
  };

  return (
    <div className="lg:mt-4 sm:mb-30 pt-10 mx-2 text-avista3">
      <form onSubmit={handleSubmit} className="backdrop-blur-lg bg-gradient-to-l from-avista via-avista2 shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="file" className="block text-avista3 font-bold mb-2">
            Proof of Payment Slip:
          </label>
          <input
            type="file"
            id="file"
           
            onChange={handleFileChange}
            className="appearance-none border rounded w-full py-2 px-3 text-avista3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        {success && <p className="text-green-500 text-xs italic mb-4">Payment slip uploaded successfully!</p>}
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isLoading && 'opacity-50 cursor-not-allowed'}`}
        >
          {isLoading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
};

export default Slipform;
