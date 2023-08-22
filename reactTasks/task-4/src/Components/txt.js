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