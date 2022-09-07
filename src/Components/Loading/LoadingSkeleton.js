import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <>
      <div
        className="users-grid"
        style={{ padding: "15px", marginLeft: "200px" }}
      >
        {Array(6)
          .fill({})
          .map(() => {
            return (
              <div style={{ padding: "20px" }}>
                <Skeleton
                  circle={true}
                  width={100}
                  height={100}
                  style={{
                    margin: "10px 40px",
                  }}
                />
                <Skeleton
                  count={2}
                  width={200}
                  style={{ marginBottom: "20px" }}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Loading;
