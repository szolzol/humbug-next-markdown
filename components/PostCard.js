import Link from "next/link";

export default function PostCard(props) {
  const { post } = props;

  return (
    <Link className="unstyled" href={`/humbug/${post.slug}`}>
      <div className="postCard">
        <h3>{post.title}</h3>
        <p>{post.bio}</p>
        <div className="statsContainer">
          <div>
            <h5>Kategória</h5>
            <p>{post.category}</p>
          </div>
          <div>
            <h5>Nehézség</h5>
            <p>{post.difficulty}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
