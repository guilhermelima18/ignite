export default function RepositoryItem({ repositories }) {
  return (
    <>
      {repositories.map(({ id, name, description, html_url }) => (
        <li key={id}>
          <strong>{name}</strong>
          <p>{description}</p>
          <a href={html_url} target="_blank">Acessar repositório</a>
        </li>
      ))}
    </>
  );
};