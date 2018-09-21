import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from './components/Counter'
import { push } from "connected-react-router"
import {connect} from 'react-redux';

const Routes = ({changeLocation, pathname, search, hash}) => (
  <div>
    <h2> Current Location: {`${pathname}${search?"?".concat(search):''}${hash?"#".concat(hash):''}`}</h2>
    <Switch>
      <Route path="/sup" component={() => <div>What up?</div>} />
      <Route path="/count" component={Counter} />
    </Switch>
    <hr/>
    <button onClick={ () => changeLocation("/sup")}>SUP</button>
    <hr/>
    <button onClick={ () => changeLocation("/count")}>Count</button>
  </div>
)


const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
})

const mapDispatchToProps = dispatch => ({
  changeLocation: (location) => {dispatch(push(location))}
})

export default connect(mapStateToProps,mapDispatchToProps) (Routes);
