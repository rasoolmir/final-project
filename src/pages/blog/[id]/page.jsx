import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../../components/Loading.component";

import styles from "./page.module.css";

export default function BlogPage() {
  const { id } = useParams();
  const { blogs, loading } = useSelector((state) => state.blogs);
  const blog = blogs.find((b) => b.id === id);

  if (loading) {
    return <Loading />;
  }

  if (!blog) {
    return <div>بلاگ پیدا نشد</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles["blog-image"]}>
        <img src={blog.image} alt="blog image" />
      </div>
      <header>
        <h1>{blog.title}</h1>
        <div className={styles["blog-details"]}>
          <span>{blog.category}</span>
          <span>{blog.datePosted}</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        tempore placeat eaque sint doloribus quasi laborum iure repudiandae
        commodi, nisi nesciunt esse, nihil eum numquam odio veniam adipisci
        veritatis incidunt.
      </p>
    </div>
  );
}
