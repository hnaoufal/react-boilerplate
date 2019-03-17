import * as React from 'react';
import { loadAllReviews, loadReviews } from '../../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({
  reviews: state.reviews
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ loadReviews, loadAllReviews}, dispatch);

type Props = {
  loadReviews: (page: any) => any;
}

class Reviews extends React.Component<Props,{}> {

  public componentDidMount() {
    console.log('test')
    this.props.loadReviews(1);
  }

  public render() {
    return (
      <div>Hello Wold Teil 2</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
