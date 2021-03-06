import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import './app-scss/antd-theme.less';
import './app-scss/app.scss';

injectGlobal`
  ${styledNormalize}

  .clearfix:before, .clearfix:after {
    content: " ";
    display: table;
  }
  .clearfix:after {
    clear: both;
  }

  .ant-message-notice-content {
    background: black;
  }
  .ant-notification-notice-message {
    /* color: white; */
  }
  .ant-notification-notice-description {
    color: black;
  }
`;
