In this project, I've built **React Blogs** by using Fetch and React Routing.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/fetch-and-routing-practice-output.gif" alt="fetch and routing practice desktop output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files on Different Devices

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/fetch-and-routing-practice-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://assets.ccbp.in/frontend/content/react-js/fetch-and-routing-practice-lg-blog-list-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Blog Item Details](https://assets.ccbp.in/frontend/content/react-js/fetch-and-routing-practice-lg-blog-item-output.png)

</details>

### Functionalities

<details>
<summary>Application Functionalities </summary>
<br/>

The app has the following functionalities

- When the app is opened, Home Route will be displayed
- When the Home Route is opened,

  - A HTTP GET request is made to the **blogsApiUrl**
  - I've added a **Loader** while data fetching
  - After fetching the data, the list of blogs will be displayed

- When a blog item in Home Route is clicked,
  - Page will be navigated to the Blog Item Details Route with the URL `/blogs/:id`
- When the Blog Item Details Route is opened,
  - A HTTP GET request is made to the **blogItemDetailsApiUrl** with the blog id to get the details of the blog
    - Example: `https://apis.ccbp.in/blogs/2`
  - After fetching the data, the details of the blog will be displayed

</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #8e8e8e; width: 150px; padding: 10px; color: white">Hex: #8e8e8e</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #d3d3d3; width: 150px; padding: 10px; color: white">Hex: #d3d3d3</div>
<div style="background-color: #2f4f4f; width: 150px; padding: 10px; color: white">Hex: #2f4f4f</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto
