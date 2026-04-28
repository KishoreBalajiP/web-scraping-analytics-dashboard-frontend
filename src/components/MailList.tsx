import { Mail } from "../types/Mail";

interface Props {
  emails: Mail[];
}

const MailList = ({ emails }: Props) => {

  if (!emails.length)
    return (
      <p className="text-gray-500 text-center py-10">
        No emails found
      </p>
    );

  return (
    <div className="grid gap-4 max-h-[600px] overflow-y-auto pr-2">

      {emails.map((mail, i) => (

        <div
          key={i}
          className="border border-gray-200 hover:border-indigo-400 transition rounded-xl p-4"
        >

          <h3 className="font-semibold text-gray-800">
            {mail.subject}
          </h3>

          <p className="text-sm text-indigo-600 mt-1">
            {mail.from}
          </p>

          <p className="mt-2 text-gray-600 text-sm">
            {mail.snippet}
          </p>

          <p className="text-xs mt-3 text-gray-400">
            {new Date(mail.date).toLocaleString()}
          </p>

        </div>

      ))}

    </div>
  );
};

export default MailList;