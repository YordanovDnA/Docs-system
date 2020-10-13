import React from "react";

const PatientNotes = ({ notes }) => {
  return (
    <React.Fragment>
      <div className="mt-2">
        <div id="accordianId" role="tablist" aria-multiselectable="true">
          {notes &&
            notes.map((note) => {
              return (
                <div key={note.title} className="card">
                  <div className="card-header" role="tab" id="section2HeaderId">
                    <h5 className="mb-0">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordianId"
                        href="#section2ContentId"
                        aria-expanded="true"
                        aria-controls="section2ContentId"
                      >
                        {note.title}
                      </a>
                    </h5>
                  </div>
                  <div
                    id="section2ContentId"
                    className="collapse in"
                    role="tabpanel"
                    aria-labelledby="section2HeaderId"
                  >
                    <div className="card-body">
                      {note.body}
                      <p className="text-muted">{`- Added by ${note.addedBy}`}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PatientNotes;
