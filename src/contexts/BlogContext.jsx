//* database e bilgi ekleme, bilgi alma, bilgi silme
// import app from "../helpers/firebase";
import { getDatabase, ref, set, push, onValue, update, remove } from "firebase/database";
import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from '../contexts/AuthContext';
import toastify from "../helpers/toastify";

export const BlogContext = createContext()
const d = new Date();
const time = d.toLocaleDateString();

const BlogContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    
    
    //*bilgi ekleme
    const AddBlog = (info) => {
        const database = getDatabase();
        const blogRef = ref(database, "userinfo");
        const newBlogRef = push(blogRef)
        set((newBlogRef), {
            title: info.title,
            imageURL: info.imageURL,
            content: info.content,
            author: currentUser.email,
            date : time
        })
        toastify("Blog Added successfully")
    }

    //*bilgi çağırma
    const BlogFetch = () => {
        const [isLoading, setIsLoading] = useState();
        const [blogList, setBlogList] = useState();

        useEffect(() => {
            setIsLoading(true)
            const database = getDatabase();
            const blogRef = ref(database, "userinfo");

            onValue(blogRef, (snapshot) => {
                const data = snapshot.val();
                const connectArray = []

                for (let id in data) {
                    connectArray.push({ id, ...data[id] })
                }
                setBlogList(connectArray)
                setIsLoading(false)
            })
        }, [])
        return { isLoading, blogList }

    }

      //!veri Silme
      const DeleteBlog = (id) => {
        const database = getDatabase();
        toastify("Blog deleted successfully")

        remove(ref(database, "userinfo/" + id))
    }


    //!Bilgi Değiştirme
    const EditBlog = (info) => {
        const database = getDatabase();
        const updates = {};
        toastify("Blog updated successfully")

        updates["userinfo/" + info.id] = info;
        return update(ref(database), updates)
    }


    return (
        <BlogContext.Provider value={{ BlogFetch, AddBlog, DeleteBlog, EditBlog }} >
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;