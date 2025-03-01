export default `section .note-callout {
  border: none;
  padding: 1em 1em 1em 1.5em;
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  border-radius: 4px;
}

section .note-callout-title-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1em;
  font-weight: 600;
}

section .note-callout-title {
  margin-left: 0.25em;
}

section .note-callout-content {
  color: rgb(34,34,34);
}

/* note info todo */
section .note-callout-note { 
  color: rgb(8, 109, 221);
  background-color: rgba(8, 109, 221, 0.1);
}
/* abstract tip hint */
section .note-callout-abstract {
  color: rgb(0, 191, 188);
  background-color: rgba(0, 191, 188, 0.1);
}
section .note-callout-success {
  color: rgb(8, 185, 78);
  background-color: rgba(8, 185, 78, 0.1);
}
/* question  help, faq, warning, caution, attention */
section .note-callout-question {
  color: rgb(236, 117, 0);
  background-color: rgba(236, 117, 0, 0.1);
}
/* failure, fail, missing, danger, error, bug */
section .note-callout-failure {
  color: rgb(233, 49, 71);
  background-color: rgba(233, 49, 71, 0.1);
}
section .note-callout-example {
  color: rgb(120, 82, 238);
  background-color: rgba(120, 82, 238, 0.1);
}
section .note-callout-quote {
  color: rgb(158, 158, 158);
  background-color: rgba(158, 158, 158, 0.1);
}`;