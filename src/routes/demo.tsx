import FunctionComponentDemo from '../components/functionComponentDemo'

export function Demo() {
  return (
    <article className="content">
      <h1>Demo</h1>
      <p>Component demos...</p>
      <FunctionComponentDemo
        name="Test Component"
        description="just another desc"
        style={{ color: 'purple', border: '1px solid purple', margin: '8px' }}
        data-test="data-attribute-value"
      >
        <div>child content here</div>
      </FunctionComponentDemo>
      <FunctionComponentDemo
        name="Test Component no child"
        style={{ color: 'red', border: '1px solid red', margin: '8px' }}
      />
    </article>
  )
}
