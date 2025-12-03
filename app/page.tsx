import { Slide, ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        transition={Slide}
        className="z-50"
        autoClose={3000}
        closeButton={true}
        pauseOnHover={true}
      />
    </div>

  );
}
