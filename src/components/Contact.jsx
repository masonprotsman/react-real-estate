import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {

    const [result, setResult] = React.useState("");
    const [isSending, setIsSending] = React.useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSending(true);
        setResult("Sending....");
        const formData = new FormData(event.target);

        // web3forms expects lowercase field names: name, email, message
        formData.append("access_key", "7add464b-ab80-4010-9966-748c13537cca");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("");
                toast.success("Message sent successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                toast.error(data.message || 'Submission failed');
                setResult(data.message || 'Submission failed');
            }
        } catch (err) {
            console.error(err);
            toast.error('Network error. Please try again.');
            setResult('Network error. Please try again.');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decorations-1 under font-light'>Testimonials</span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Future Together!</p>

            <form onSubmit={onSubmit} className='max-w-2xl text-gray-600 pt-8 mx-auto'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        <label htmlFor='contact-name' className='block text-sm font-medium text-gray-700'>Name</label>
                        <input id='contact-name' name='name' autoComplete='name' className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" placeholder='Your Name' required />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        <label htmlFor='contact-email' className='block text-sm font-medium text-gray-700'>Email</label>
                        <input id='contact-email' name='email' autoComplete='email' className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" placeholder='Your Email' required />
                    </div>
                </div>
                <div className='my-6 text-left'>
                    <label htmlFor='contact-message' className='block text-sm font-medium text-gray-700'>Message</label>
                    <textarea id='contact-message' name='message' className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' placeholder='Message' required></textarea>
                </div>
                <button type="submit" disabled={isSending} className={`bg-blue-600 hover:bg-blue-800 text-white px-12 py-2 rounded ${isSending ? 'opacity-60 cursor-not-allowed' : ''}`}>{isSending ? 'Sending...' : (result || 'Send Message')}</button>
            </form>
        </div>
    )
}

export default Contact
