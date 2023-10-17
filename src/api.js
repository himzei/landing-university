const BASE_PATH =
  "https://port-0-landing-iwon-backend-by52fb24lbbufx8n.gksl2.cloudtype.app/api/v1";
// "http://localhost:3000/api/v1";

export async function handleConsulting({
  name,
  email,
  tel,
  message,
  major,
  grade,
}) {
  console.log(name, email, tel, message);
  return await fetch(`${BASE_PATH}/consulting/writeUniversity`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      type: "대구한의대 사무관리원 양성과정",
      name,
      email,
      tel,
      major,
      grade,
      message,
    }),
  }).then((response) => response.json());
}
