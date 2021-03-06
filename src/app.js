
const app ={
  title: 'TO-DO-LIST APP',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value ='';
    render();
  }
};
const onRemoveAll = () => {
  app.options=[];
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length>0 ? 'Here are your options' : 'No option'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) =>{
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'/>
        <button>Submit</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
