import { Link } from "react-router-dom"

const Contact=()=>{
    return(
        <div className="items-center">
            <h1 className="text-xl"> Abhishek kumar rai</h1>
            <Link to="https://github.com/officialiiestabhi">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyYZl4Yf0aGwj8FPEOmjhG1ODkzi6gjbB9lw&usqp=CAU"
                alt="gitlogo"
            />
            </Link>
            <Link to="https://www.linkedin.com/in/abhishek-kumar-rai-061116156/">
            <img
            className="w-80"
                src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2023/08/1637655738-linkedin-101-hero2x.jpg?resize=738%2C320&ssl=1"
                alt="linkedinlogo"
            />
            </Link>
        </div>
    )
}
export default Contact