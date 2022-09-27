import { useEffect, useState } from 'react';
import { Layout, Col, Row } from 'antd';
import { ButtonCircle, Buttonrectangle } from './components/buttons/index';
import BadgeComponent from './components/badge'
import CardComponent from './components/card';

import TaskController from './controllers/tasks.controller';
import TagController from './controllers/tags.controller';

const { Sider, Content } = Layout;
function App() {
  const [tasks, setTasks] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const tasks = await TaskController.instance.index();
      const tags = await TagController.instance.index();

      if(tasks.length > 0) {
        setTasks(tasks);
      }

      if(tags.length > 0) {
        setTags(tags)
      }
      console.log(tasks)
    }
    fetchData();
  }, [])

  return (
    <Layout>
      <Sider width={300}>
        <Row>
          <Col span={24} style={{marginBottom: '1rem'}}>
            <Buttonrectangle caption="NEW TAG"/>
          </Col>
          <Col span={24}>
            <Row>
              <Col span={24} style={{textAlign: 'center', marginBottom: '1rem'}}><h2>Tags</h2></Col>
              <Col span={24}>
                <Row>
                  {
                    (tags)
                    ? (tags.map(tag => (
                      <Col span={24} key={ tag.id }>
                        <BadgeComponent text={tag.name} color={tag.color}/>
                      </Col>
                    )))
                    : 'No tags!'
                  }
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Sider>
      <Content>
        <ButtonCircle tooltipCaption="new task"/>
        <Row>
          <Col span={24} style={{padding: '1rem'}}>
            <Row>
              {
                (tasks)
                ? (tasks.map(task => (
                  <CardComponent key={task.id} description={task.description} title={task.title} status={task.status} id={task.id}/>
                )))
                : 'No tasks'
              }
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
