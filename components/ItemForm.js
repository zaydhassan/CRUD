import { useForm } from 'react-hook-form';

export default function ItemForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(() => reset());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Item name" required />
      <button type="submit">Add Item</button>
    </form>
  );
}
