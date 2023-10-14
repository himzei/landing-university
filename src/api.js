const BASE_PATH =
  "https://port-0-landing-iwon-backend-by52fb24lbbufx8n.gksl2.cloudtype.app/api/v1";
// "http://localhost:3000/api/v1";
export async function handleConsulting({
  name,
  email,
  tel,
  category,
  message,
}) {
  console.log(name, tel, message, category);
  // return await fetch(`${BASE_PATH}/consulting/write`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   credentials: "include",
  //   body: JSON.stringify({
  //     type: "바기오 주니어캠프",
  //     name,
  //     email,
  //     tel,
  //     category,
  //     message,
  //   }),
  // }).then((response) => response.json());
}
