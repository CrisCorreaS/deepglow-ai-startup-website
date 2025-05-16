import { useEffect, useState } from "react";
import supabase from "../helper/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { trashIcon } from "../assets";
import * as XLSX from "xlsx";
function Dashboard() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [activeTab, setActiveTab] = useState("contactForm"); 

  useEffect(() => {
    const fetchUserAndData = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        console.error("Error fetching user", userError);
        return;
      }

      setCurrentUserId(user?.id);

      const [{ data: messagesData, error: msgError }, 
             { data: testimonialsData, error: testError }] = await Promise.all([
        supabase
          .from("contact_messages")
          .select("*")
          .order("created_at", { ascending: false }),
        supabase
          .from("testimonials")
          .select("*")
          .order("created_at", { ascending: false })
      ]);

      if (msgError) console.error("Error fetching messages", msgError);
      else setMessages(messagesData);

      if (testError) console.error("Error fetching testimonials", testError);
      else setTestimonials(testimonialsData);
    };

    fetchUserAndData();
  }, []);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate("/login");
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?"))
      return;

    setIsDeleting(true);
    try {
      const { error } = await supabase
        .from("contact_messages")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setMessages(messages.filter((msg) => msg.id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const deleteTestimonial = async (id) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?"))
      return;

    setIsDeleting(true);
    try {
      const { error } = await supabase
        .from("testimonials")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id));
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const exportToExcel = () => {
    const dataForExcel = messages.map(msg => ({
      "Name": msg.name,
      "Email": msg.email,
      "Phone": msg.phone || "-",
      "Company": msg.company || "-",
      "Country": msg.country || "-",
      "Job Title": msg.job_title || "-",
      "Message": msg.message,
      "Date": new Date(msg.created_at).toLocaleString()
    }));

    const ws = XLSX.utils.json_to_sheet(dataForExcel);
    
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Contact Messages");
    
    XLSX.writeFile(wb, "contact_messages.xlsx");
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Manage contact form submissions and testimonials
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link
              to="/register"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-center"
            >
              Register New Admin
            </Link>
            <button
              onClick={signOut}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Sign out
            </button>
          </div>
        </div>

        <div className="mb-8 text-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setActiveTab("contactForm")}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                activeTab === "contactForm"
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Contact Form
            </button>
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                activeTab === "testimonials"
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Testimonials
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                {activeTab === "contactForm" 
                  ? "Contact Form Submissions" 
                  : "Customer Testimonials"}
              </h2>
              <span className="mt-1 sm:mt-0 px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                {activeTab === "contactForm" 
                  ? `${messages.length} ${messages.length === 1 ? "message" : "messages"} received`
                  : `${testimonials.length} ${testimonials.length === 1 ? "testimonial" : "testimonials"}`}
              </span>
              {activeTab === "contactForm" && messages.length > 0 && (
                  <button
                    onClick={exportToExcel}
                    className="px-4 py-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-full transition-colors duration-200 flex items-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Export to Excel
                  </button>
                )}
            </div>
          </div>

          {activeTab === "contactForm" ? (
            <>
              {messages.length === 0 ? (
                <div className="px-6 py-12 text-center">
                  <p className="text-gray-500">
                    No messages yet. Check back later.
                  </p>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {messages.map((msg) => (
                    <li
                      key={msg.id}
                      className="px-6 py-5 hover:bg-gray-50 transition-colors duration-150 relative"
                    >
                      {currentUserId === "7a15523d-ae0b-40a3-b1c6-d688cbba27bf" && (
                        <button
                          onClick={() => deleteMessage(msg.id)}
                          disabled={isDeleting}
                          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-1 text-red-500 hover:text-red-700 transition-colors"
                          title="Delete message"
                        >
                          <img src={trashIcon} alt="Delete" className="h-5 w-5" />
                        </button>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-6">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Name</p>
                          <p className="mt-1 text-sm text-gray-600">{msg.name}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Email</p>
                          <p className="mt-1 text-sm text-gray-600">{msg.email}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Phone</p>
                          <p className="mt-1 text-sm text-gray-600">
                            {msg.phone || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Company
                          </p>
                          <p className="mt-1 text-sm text-gray-600">
                            {msg.company || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Country
                          </p>
                          <p className="mt-1 text-sm text-gray-600">
                            {msg.country || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Job Title
                          </p>
                          <p className="mt-1 text-sm text-gray-600">
                            {msg.job_title || "-"}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 pr-6">
                        <p className="text-sm font-medium text-gray-900">Message</p>
                        <p className="mt-1 text-sm text-gray-600 whitespace-pre-line">
                          {msg.message}
                        </p>
                      </div>
                      <div className="mt-3">
                        <p className="text-xs text-gray-500">
                          Submitted: {new Date(msg.created_at).toLocaleString()}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <>
              {testimonials.length === 0 ? (
                <div className="px-6 py-12 text-center">
                  <p className="text-gray-500">
                    No testimonials yet. Check back later.
                  </p>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {testimonials.map((testimonial) => (
                    <li
                      key={testimonial.id}
                      className="px-6 py-5 hover:bg-gray-50 transition-colors duration-150 relative"
                    >
                      {currentUserId === "7a15523d-ae0b-40a3-b1c6-d688cbba27bf" && (
                        <button
                          onClick={() => deleteTestimonial(testimonial.id)}
                          disabled={isDeleting}
                          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-1 text-red-500 hover:text-red-700 transition-colors"
                          title="Delete testimonial"
                        >
                          <img src={trashIcon} alt="Delete" className="h-5 w-5" />
                        </button>
                      )}

                      <div className="flex items-start gap-4">
                        {testimonial.img_path && (
                          <img
                            src={testimonial.img_path}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        )}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-sm font-medium text-gray-900">
                              {testimonial.name}
                            </p>
                            {testimonial.mentions && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {testimonial.mentions}
                              </span>
                            )}
                          </div>
                          
                          <div className="flex gap-1 mb-2">
                            {Array.from({ length: testimonial.stars || 0 }).map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-2">
                            {testimonial.review}
                          </p>
                          
                          <p className="text-xs text-gray-500">
                            Submitted: {new Date(testimonial.created_at).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;