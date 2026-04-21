import { Mail } from "../types/Mail";

interface Props {
  emails: Mail[];
}

const MailList = ({ emails }: Props) => {
  if (!emails.length)
    return (
      <p className="text-gray-500">
        No emails found
      </p>
    );

  return (
    <div className="grid gap-4">
      {emails.map((mail, i) => (
        <div
          key={i}
          className="bg-white shadow p-4 rounded"
        >
          <h3 className="font-semibold">
            {mail.subject}
          </h3>

          <p className="text-sm text-gray-500">
            {mail.from}
          </p>

          <p className="mt-2">
            {mail.snippet}
          </p>

          <p className="text-xs mt-2 text-gray-400">
            {new Date(mail.date).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MailList;