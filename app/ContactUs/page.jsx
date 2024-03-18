import ContactForm from "../../components/ContactForm";

export default function Home() {
  return (
    <div className="p-5 max-w-3xl mx-auto bg-slate-200 mb-5 mt-4">
      <h1 className="p-4 text-3xl font-bold text-center">Contact Us</h1>
      <p className="pl-4 text-center text-blue-950"> Your thoughts are the compass guiding our journey. Share your experiences, inquiries, or
        simply say hello - we'd love to hear from you. <br></br> <br></br>&#127802; <br></br>Reach out through our Contact Us page and let the conversation begin. </p>
      <ContactForm />
    </div>
  );
}

