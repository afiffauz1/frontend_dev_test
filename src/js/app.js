let taskData = "";

let taskList = [
  { task: "Create initial layout for Homepage", status: "Approved" },
  { task: "Fixing icons with transparent background", status: "In Progress" },
  { task: "Fixing icons with transparent background", status: "In Progress" },
  { task: "Profile Page Bug Fix", status: "In Review" },
  { task: "Workflow Improvement", status: "Rejected" },
  { task: "Security Issue", status: "Waiting" },
  { task: "Button Home Fixing", status: "Waiting" },
];

const textTodo = [
  "Add post message",
  "Show collection helper text in collections menu",
  "Button color clean up",
  "Decouple board page list CSS",
  "Pre-load card attachments",
  "Fixing icons with transparent background",
  "Resolve bug as they arrive to keep your code running",
  "Attachment not displaying in Windows 10",
  "Mobile web calendar doesm't show any cards",
  "RTL doesn't work while editing description",
  "Chrome card flickering",
  "Locale is not set for all users",
  "Fix sockets reconnect rate",
  "No cursor in header search field in FF on mac",
  "Users cannot rename attachment without reuploading the attachment",
];

const statusList = [
  "Approved",
  "In Progress",
  "In Review",
  "Waiting",
  "Rejected",
];

// tabel dengan data
taskList.forEach((item) => {
  const { task, status } = item;
  taskData += `
    <tr>
        <th>${task}</th>
        <td>${status}</td>
    </tr>
  `;
});

tableUI(taskData); //load UI

function tableUI(data) {
  const taskContainer = document.getElementById("task");

  taskContainer.innerHTML = `
  <table>${data}</table>
  `;

  const itemList = document.querySelectorAll("td");
  itemList.forEach((item) => {
    if (item.textContent === "Approved") {
      item.style.color = "#11998e";
    } else if (item.textContent === "In Progress") {
      item.style.color = "#6190E8";
    } else if (item.textContent === "In Review") {
      item.style.color = "#F37335";
    } else if (item.textContent === "Waiting") {
      item.style.color = "#485563";
    } else {
      item.style.color = "#ED213A";
    }
  });
}

// add data
const btnAdd = document.getElementById("btn-add");

// task dan status akan ditampilkan secara random ketika user klik tombol
btnAdd.addEventListener("click", function (event) {
  //untuk merandom task dan status berdasarkan index array
  const randomTask = Math.floor(Math.random() * 15);
  const randomStatus = Math.floor(Math.random() * 5);

  const statusTask = statusList[randomStatus];
  const taskTodo = textTodo[randomTask];

  taskData += `
      <tr>
          <th>${taskTodo}</th>
          <td>${statusTask}</td>
      </tr>
    `;

  console.log(taskList);
  tableUI(taskData);
  event.preventDefault();
});
