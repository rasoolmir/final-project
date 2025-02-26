import { useNavigate } from "react-router-dom";

export default function NotFoundComponent() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>صفحه مورد نظر یافت نشد! 😢</h2>
      <button onClick={() => navigate("/home")}>بازگشت به صفحه اصلی</button>
    </div>
  );
}
