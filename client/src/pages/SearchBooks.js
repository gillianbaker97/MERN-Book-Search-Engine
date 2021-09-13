import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
//import { QUERY_BOOK } from '../utils/mutations';
import { SAVE_BOOK} from '../utils/mutations';


const FindBook = () => {
  //const { loading, data } = useQuery(QUERY_BOOK);
  const bookList = data?.book || [];

  const [bookData, setBookData] = useState({
    authors: 'JavaScript',
    description: 'JavaScript',
    bookId: 'JavaScript',
    image: 'JavaScript',
    link: 'JavaScript',
    title: 'JavaScript',
  });
  let history = useHistory();
  const [saveFindBook, { error }] = useMutation(SAVE_BOOK);

  const handleInputChange = (event) => {
    const{ name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await saveFindBook({
        variables: { ...formData},
      });

      history.push(`/book/${data.createBook._id}`);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      authors: 'JavaScript',
      description: 'JavaScript',
      title: 'JavaScript',
      image: 'JavaScript',
      line_index: 'JavaScript',
    });
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Find some books!</h1>
      </div>
      <div className="card-body m-5">
        {loading? (
          <div>Loading...</div>
        ): (
          <form>
            onSubmit={handleFormSubmit}>
            <label>Authors</label>
            <select name="authors" onChange={handleInputChange}>
              {bookList.map((book) => {
                return (
                  <option key={book.id} value={book.name}>
                    {book.name}
                  </option>
                );
              })}
              </select>
              <label> Description:</label>
              <select name="description" onChange={handleInputChange}>
                {bookList.map((book) => {
                  return(
                    <option key={book._id} value={book.name}>
                      {book.name}
                    </option>
                  );
                })}
                </select>
                <button className="btn btn-danger" type="submit">
                  Create a Book!
                </button>
          </form>
        )}
      </div>
      {error && <div> Something went awry </div>}
    </div>
  );
};
