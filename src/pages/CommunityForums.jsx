import { FaThumbsDown, FaThumbsUp, FaUserTie } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const CommunityForums = () => {
  //const [forums, setForums] = useState([]);
  //const axiosSecure = useAxiosSecure();
  //console.log(forums);

  // useEffect(() => {
  //   const fetchForums = async () => {
  //     try {
  //       const res = await axiosSecure.get("/forums");
  //       setForums(res.data);
  //     } catch (error) {
  //       console.error("Error fetching forums:", error);
  //     }
  //   };

  //   fetchForums();
  // }, [axiosSecure]);

  // const handleVote = async (forumId, voteType) => {
  //   try {
  //     const res = await axiosSecure.post(`/forums/${forumId}/vote`, { type: voteType });
      
  //     setForums((prevForums) =>
  //       prevForums.map((forum) =>
  //         forum._id === forumId ? { ...forum, ...res.data } : forum
  //       )
  //     );
  //   } catch (error) {
  //     console.error("Error updating vote:", error);
  //   }
  // };
  const forums = [
    {
      _id: "1",
      title: "The Impact of Classic Literature on Modern Society",
      description: "Discuss how classic literature continues to influence contemporary storytelling and culture.",
      imageURL: "https://i.ibb.co.com/cGnB2sr/Classic-Literature-and-its-relevance-to-modern-readers.png",
      createdBy: {
        displayName: "John Doe",
        photoURL: "https://i.ibb.co.com/q3m7Qqc2/tagore-12892-landscape-medium.jpg",
        role: "admin",
      },
      upvotes: 12,
      downvotes: 3,
    },
    {
      _id: "2",
      title: "Best Mystery Novels of the Decade",
      description: "Share your favorite mystery novels from the past 10 years and discuss their impact.",
      imageURL: "https://i.ibb.co.com/Jwsn3QjD/image-13.jpg",
      createdBy: {
        displayName: "Jane Smith",
        photoURL: "https://i.ibb.co.com/q3m7Qqc2/tagore-12892-landscape-medium.jpg",
        role: "member",
      },
      upvotes: 20,
      downvotes: 5,
    },
    {
      _id: "3",
      title: "E-Books vs Physical Books: Which is Better?",
      description: "A debate on the pros and cons of reading digital books versus traditional printed books.",
      imageURL: "https://i.ibb.co.com/nMyWJMb9/image-15.jpg",
      createdBy: {
        displayName: "Emily Brown",
        photoURL: "https://i.ibb.co.com/q3m7Qqc2/tagore-12892-landscape-medium.jpg",
        role: "member",
      },
      upvotes: 30,
      downvotes: 10,
    },
    {
      _id: "4",
      title: "Top 5 Self-Help Books for Personal Growth",
      description: "Recommendations for the best self-help books that have helped transform lives.",
      imageURL: "https://i.ibb.co.com/q3syywWS/image-14.jpg",
      createdBy: {
        displayName: "Michael Johnson",
        photoURL: "https://i.ibb.co.com/q3m7Qqc2/tagore-12892-landscape-medium.jpg",
        role: "admin",
      },
      upvotes: 15,
      downvotes: 2,
    },
    {
      _id: "5",
      title: "Fantasy Worlds That Left a Lasting Impression",
      description: "Explore the most immersive fantasy book worlds and their incredible storytelling.",
      imageURL: "https://i.ibb.co.com/FbKfpWcF/image-17.jpg",
      createdBy: {
        displayName: "Sarah Lee",
        photoURL: "https://i.ibb.co.com/q3m7Qqc2/tagore-12892-landscape-medium.jpg",
        role: "member",
      },
      upvotes: 25,
      downvotes: 8,
    },
    {
      _id: "6",
      title: "The Rise of Audiobooks: Are They the Future?",
      description: "A discussion on the growing popularity of audiobooks and their impact on traditional reading habits.",
      imageURL: "https://i.ibb.co.com/rgGTWBC/image.png",
      createdBy: {
        displayName: "David Wilson",
        photoURL: "https://i.ibb.co.com/q3m7Qqc2/tagore-12892-landscape-medium.jpg",
        role: "member",
      },
      upvotes: 18,
      downvotes: 4,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <Helmet>
        <title>MF || Forums</title>
      </Helmet>
      <h1 className="text-4xl text-center font-bold text-primary mb-10">Community Forums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {forums.map((forum) => (
          <div
            key={forum._id}
            className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800"
          >
            <div className="flex space-x-4">
              <img
                alt=""
                src={forum.createdBy.photoURL}
                className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
              />
              <div className="flex flex-col space-y-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm font-semibold"
                >
                  {forum.createdBy.displayName}
                </a>
                <button
                  type="button"
                  className=" px-4 py-1 font-semibold rounded dark:bg-zinc-300"
                >
                  {forum.createdBy.role === "admin" ? (
                    <FaUserTie className="text-green-500" />
                  ) : (
                    <FaUserPen className="text-accent" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <img
                src={forum.imageURL || "https://source.unsplash.com/random/300x200"}
                alt="Forum"
                className="object-cover w-full mb-4 h-60 sm:h-48 dark:bg-gray-500"
              />
              <h2 className="mb-1 text-xl font-semibold">{forum.title}</h2>
              <p className="text-sm dark:text-gray-600">{forum.description}</p>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="flex space-x-2">
                <button
                  aria-label="Share this post"
                  type="button"
                  className="p-2 text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current dark:text-violet-600"
                  >
                    <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex space-x-4 items-center text-sm dark:text-gray-600">
                <button
                  
                  className="flex items-center space-x-1 text-red-500"
                >
                  <FaThumbsDown />
                  <span>{forum.downvotes || 0}</span>
                </button>
                <button
                  
                  className="flex items-center space-x-1 text-green-500"
                >
                  <FaThumbsUp />
                  <span>{forum.upvotes || 0}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityForums;
