import * as React from 'react';
import 'isomorphic-unfetch';
// import { observable } from 'mobx';
import '../assets/styles/app';
import { inject, observer } from 'mobx-react';
import { IAppStore } from '../stores/AppStore';
import { MainNav, MainFooter, MainPage } from '../components';
import { SLayout } from '../styledComponents';
import CodeEditor from '../components/CodeEditor';

interface IProps {
  appStore?: IAppStore;
  gistId: string;
}

@inject('appStore')
@observer
class App extends React.Component<IProps> {
  static async getInitialProps({ query }) {
    // NOTE : fetch base url
    console.log(process.env.BACKEND_URL);
    return { gistId: Object.keys(query)[0] };
  }

  render() {
    const { gistId } = this.props;
    gistId && this.props.appStore.editor.getGist(gistId);
    return (
      <>
        {gistId ? (
          <CodeEditor />
        ) : (
          <SLayout>
            <MainNav />
            <MainPage />
            <MainFooter />
          </SLayout>
        )}
      </>
    );
  }
}

export default App;
