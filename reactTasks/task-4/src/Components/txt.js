      {/* {data.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => editUser(d)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm ms-1 btn-danger"
                  onClick={()=>openModal(d.id)}
                >
                  Delete
                </button>

                <button
                  className="btn btn-sm ms-1 btn-success"
                  onClick={() => viewUser(d)}
                >
                  View
                </button>
            
                {/* deleteUser(d.id) */}
          {/* <Link
                        to={`/users/edit/${d.id}`}
                        className="btn btn-sm btn-success"
                      >
                        Edit
                      </Link>
                      <Link
                        to={`/users/delete/${d.id}`}
                        className="btn btn-sm ms-1 btn-danger"
                      >
                        Delete
                      </Link>
                      <Link
                        to={`/users/${d.id}`}
                        className="btn btn-sm ms-1 btn-success"
                      >
                        View
                      </Link> */}
          {/* </td>
            </tr>
          ))} */}











  // pagination
  // const [currentPage, setCurrentPage] = useState(1);
  // const recordsPerPage = 5;
  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage;
  // const records = data?.slice(firstIndex, lastIndex);
  // const noOfPage = Math.ceil(data?.length / recordsPerPage);
  // const numbers = [...Array(noOfPage + 1).keys()]?.slice(1);

  // function prePage(){
  //    if(currentPage !== 1){
  //     setCurrentPage(currentPage - 1)
  //    }
  // }

  // function changeCurrPage(num){
  //    setCurrentPage(num)
  // }

  // function nextPage(){
  //   if(currentPage !== noOfPage){
  //     setCurrentPage(currentPage + 1)
  //    }
  // }


             {/* <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((num, index) => (
              <li
                className={`page-item ${currentPage === num ? "active" : ""}`}
                key={index}
              >
                <a href="#" className="page-link" onClick={()=>changeCurrPage(num)}>
                  {num}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav> */}