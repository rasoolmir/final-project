import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "../../services/redux/slice/blog-slice";
import { blog } from "../../services/mock/blog-data";
import Loading from "../../components/Loading.component";
import { Link } from "react-router-dom";

import styles from "./blog.module.css";

export default function BlogComponent() {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(setBlogs(blog));
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <ul className={styles.blog}>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <div className={styles["blog-image"]}>
            <img src={blog.image} alt="blog image" />
          </div>
          <div className={styles["blog-details"]}>
            <header>
              <span>{blog.category}</span>
              <span>{blog.datePosted}</span>
            </header>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <Link to={`/blog/${blog.id}`}>ادامه مطلب</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
