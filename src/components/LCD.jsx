import React from 'react';

class LCD extends React.Component {
    render() {
      let {result} = this.props;
      return (
        <div className="lcd output">
          {result}
        </div>
      )
    }
}


export default LCD;