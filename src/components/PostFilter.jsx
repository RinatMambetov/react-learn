import React from "react";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск..."
      />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue={"Sort by"}
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By description" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
