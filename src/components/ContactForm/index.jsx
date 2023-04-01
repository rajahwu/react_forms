export default function ContactForm() {
  return (
    <form action="/my-handling-form-page" method="post">
      <ul>
        <li>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" />
        </li>
        <li>
          <label htmlFor="name">Email:</label>
          <input type="emal" id="mail" name="user_email" />
        </li>
        <li>
          <label htmlFor="msg">Name: </label>
          <textarea name="user_message" id="msg"></textarea>
        </li>
      </ul>
    </form>
  );
}
