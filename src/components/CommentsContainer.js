import React from "react";

const commentsData = [
  {
    name: "Shab",
    text: "Fugiat est exercitation esse est incididunt consectetur amet reprehenderit elit et do cillum ullamco ipsum.",
    replies: [
      {
        name: "Shab",
        text: "Fugiat est exercitation esse est incididunt consectetur amet reprehenderit elit et do cillum ullamco ipsum.",
        replies: [],
      },
      {
        name: "Shab",
        text: "Fugiat est exercitation esse est incididunt consectetur amet reprehenderit elit et do cillum ullamco ipsum.",
        replies: [
          {
            name: "Shab",
            text: "Fugiat est exercitation esse est incididunt consectetur amet reprehenderit elit et do cillum ullamco ipsum.",
            replies: [
              {
                name: "Shab",
                text: "Fugiat est exercitation esse est incididunt consectetur amet reprehenderit elit et do cillum ullamco ipsum.",
                replies: [
                  {
                    name: "Shab",
                    text: "Fugiat est exercitation esse est incididunt consectetur amet reprehenderit elit et do cillum ullamco ipsum.",
                    replies: [],
                  },
                  {
                    name: "Shab",
                    text: "Fugiat est exercitation esse est incididunt consectetur amet reprehenderit elit et do cillum ullamco ipsum.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shab",
    text: "Fugiat est exercitation esse est incididunt consectetur amet reprehenderit elit et do cillum ullamco ipsum.",
    replies: [],
  },
  {
    name: "Shab",
    text: "Fugiat est exercitation esse est incididunt consectetur amet reprehenderit elit et do cillum ullamco ipsum.",
    replies: [],
  },
  {
    name: "Shab",
    text: "Fugiat est exercitation esse est incididunt consectetur amet reprehenderit elit et do cillum ullamco ipsum.",
    replies: [
      {
        name: "Shab",
        text: "Fugiat est exercitation esse est incididunt consectetur amet reprehenderit elit et do cillum ullamco ipsum.",
        replies: [],
      },
    ],
  },
  {
    name: "Shab",
    text: "Fugiat est exercitation esse est incididunt consectetur amet reprehenderit elit et do cillum ullamco ipsum.",
    replies: [],
  },
  {
    name: "Shab",
    text: "Fugiat est exercitation esse est incididunt consectetur amet reprehenderit elit et do cillum ullamco ipsum.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment data={comment} />
            <div className="pl-5 border border-l-black ml-5">
              <CommentsList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
