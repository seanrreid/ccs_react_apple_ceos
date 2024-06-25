import { Form, redirect } from 'react-router-dom';
import slugify from 'slugify';

export async function action({ request }) {
    const formData = await request.formData();
    const name = formData.get('ceoName');
    const slug = slugify(name, {
        replacement: '_',
        lower: true,
        strict: true,
    });
    const year = formData.get('ceoYear');

    const data = { name, slug, "year": Number(year) };
    console.log("data", data)

    const url = 'http://localhost:8000/create';

    const addCEO = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());

    console.log(addCEO);

    return redirect(`/ceos`);
}

const AddCeo = () => {
    return (
        <Form method='post'>
            <label>
                CEO Name
                <input type='text' name='ceoName' />
            </label>
            <label>
                Year Served
                <input
                    name='ceoYear'
                    type='number'
                    min='1976'
                    max='2099'
                    step='1'
                />
            </label>
            <button type='submit'>Add CEO</button>
        </Form>
    );
};

export default AddCeo;
