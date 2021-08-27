interface RepositoryItem {
  repository: {
    id: number;
    name: string;
    description: string;
    html_url: string;
  }
}

export default function RepositoryItem({ repository }: RepositoryItem) {
  return (
    <>
      <li key={repository.id}>
        <strong>{repository.name}</strong>
        <p>{repository.description}</p>
        <a href={repository.html_url} target="_blank">Acessar repositório</a>
      </li>
    </>
  );
};