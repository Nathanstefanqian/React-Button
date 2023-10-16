import './App.css';
import Button from './component/Button.tsx'

function App() {
  return (
    <div className="App">
      <div className='box'>
        <div className='row'>
          <Button type="primary" size="normal" status="normal">Button</Button>
          <Button type="primary" size="small" status="normal">Button</Button>
          <Button type="primary" size="tiny" status="normal">Button</Button>
        </div>
        <div className='row'>
          <Button type="primary" size="normal" status="disabled">Button</Button>
          <Button type="primary" size="small" status="disabled">Button</Button>
          <Button type="primary" size="tiny" status="disabled">Button</Button>
        </div>
        <div className='row'>
          <Button type="primary" size="normal" status="clicked">Button</Button>
          <Button type="primary" size="small" status="clicked">Button</Button>
          <Button type="primary" size="tiny" status="clicked">Button</Button>
        </div>
        <div className='row'>
          <Button type="secondary" size="normal" status="normal">Button</Button>
          <Button type="secondary" size="small" status="normal">Button</Button>
          <Button type="secondary" size="tiny" status="normal">Button</Button>
        </div>
        <div className='row'>
          <Button type="secondary" size="normal" status="disabled">Button</Button>
          <Button type="secondary" size="small" status="disabled">Button</Button>
          <Button type="secondary" size="tiny" status="disabled">Button</Button>
        </div>
        <div className='row'>
          <Button type="secondary" size="normal" status="clicked">Button</Button>
          <Button type="secondary" size="small" status="clicked">Button</Button>
          <Button type="secondary" size="tiny" status="clicked">Button</Button>
        </div>
      </div>




    </div>
  )
}

export default App;
