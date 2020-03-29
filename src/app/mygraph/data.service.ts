import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  nodes = [
    {
      id: 'region_build.ec2!installec2!a.identifyservers',
      label: 'identifyservers',
      data: {
        node: {
          id: 'region_build.ec2!installec2!a.identifyservers',
          nodeType: 'Action',
          description: '',
          predecessors: [
            'region_build.ec2!installec2!m.start',
            'region_build.ec2!installec2!l.hardwareready'
          ],
          timerDurationMinutes: '0',
          actionType: 'AllocateVMs',
          actionData: 'AllocateVMs: Private data needed to carry out the action',
          expectedDurationMinutes: '0',
          parentId: 'region_build.ec2!installec2',
          name: 'identifyservers',
          selfLink: '/api/v1/data/templatenode/region_build.ec2!installec2!a.identifyservers',
          parentLink: '/api/v1/data/actionsequencetemplate/region_build.ec2!installec2'
        }
      }
    },
    {
      id: 'region_build.ec2!installec2!a.installagents',
      label: 'installagents',
      data: {
        node: {
          id: 'region_build.ec2!installec2!a.installagents',
          nodeType: 'Action',
          description: '',
          predecessors: [
            'region_build.ec2!installec2!l.networkready',
            'region_build.ec2!installec2!a.verifyserverstates'
          ],
          timerDurationMinutes: '0',
          actionType: 'InstallAgents',
          actionData: 'InstallAgents: Private data needed to carry out the action',
          expectedDurationMinutes: '0',
          parentId: 'region_build.ec2!installec2',
          name: 'installagents',
          selfLink: '/api/v1/data/templatenode/region_build.ec2!installec2!a.installagents',
          parentLink: '/api/v1/data/actionsequencetemplate/region_build.ec2!installec2'
        }
      }
    },
    {
      id: 'region_build.ec2!installec2!a.verifyagents',
      label: 'verifyagents',
      data: {
        node: {
          id: 'region_build.ec2!installec2!a.verifyagents',
          nodeType: 'Action',
          description: '',
          predecessors: [
            'region_build.ec2!installec2!a.installagents'
          ],
          timerDurationMinutes: '0',
          actionType: 'VerifyAgents',
          actionData: 'VerifyAgents: Private data needed to carry out the action',
          expectedDurationMinutes: '0',
          parentId: 'region_build.ec2!installec2',
          name: 'verifyagents',
          selfLink: '/api/v1/data/templatenode/region_build.ec2!installec2!a.verifyagents',
          parentLink: '/api/v1/data/actionsequencetemplate/region_build.ec2!installec2'
        }
      }
    },
    {
      id: 'region_build.ec2!installec2!a.verifyserverstates',
      label: 'verifyserverstates',
      data: {
        node: {
          id: 'region_build.ec2!installec2!a.verifyserverstates',
          nodeType: 'Action',
          description: '',
          predecessors: [
            'region_build.ec2!installec2!a.identifyservers'
          ],
          timerDurationMinutes: '0',
          actionType: 'VerifyServerState',
          actionData: 'VerifyServerState: Private data needed to carry out the action',
          expectedDurationMinutes: '0',
          parentId: 'region_build.ec2!installec2',
          name: 'verifyserverstates',
          selfLink: '/api/v1/data/templatenode/region_build.ec2!installec2!a.verifyserverstates',
          parentLink: '/api/v1/data/actionsequencetemplate/region_build.ec2!installec2'
        }
      }
    },
    {
      id: 'region_build.ec2!installec2!l.hardwareready',
      label: 'hardwareready',
      data: {
        node: {
          id: 'region_build.ec2!installec2!l.hardwareready',
          nodeType: 'LinkPoint',
          description: null,
          linkedId: 'region_build!global!m.hardwareinstalled',
          linkedNamespace: 'region_build',
          linkedMilestoneType: 'API',
          linkedLabel: '',
          linkedStateAnnounced: '',
          parentId: 'region_build.ec2!installec2',
          name: 'hardwareready',
          selfLink: '/api/v1/data/templatenode/region_build.ec2!installec2!l.hardwareready',
          parentLink: '/api/v1/data/actionsequencetemplate/region_build.ec2!installec2'
        }
      }
    },
    {
      id: 'region_build.ec2!installec2!l.networkready',
      label: 'networkready',
      data: {
        node: {
          id: 'region_build.ec2!installec2!l.networkready',
          nodeType: 'LinkPoint',
          description: null,
          linkedId: 'region_build!global!m.networkinstalled',
          linkedNamespace: 'region_build',
          linkedMilestoneType: 'API',
          linkedLabel: '',
          linkedStateAnnounced: '',
          parentId: 'region_build.ec2!installec2',
          name: 'networkready',
          selfLink: '/api/v1/data/templatenode/region_build.ec2!installec2!l.networkready',
          parentLink: '/api/v1/data/actionsequencetemplate/region_build.ec2!installec2'
        }
      }
    },
    {
      id: 'region_build.ec2!installec2!m.ec2ready',
      label: 'ec2ready',
      data: {
        node: {
          id: 'region_build.ec2!installec2!m.ec2ready',
          nodeType: 'Milestone',
          description: '',
          predecessors: [
            'region_build.ec2!installec2!a.verifyagents'
          ],
          timerDurationMinutes: '0',
          milestoneType: 'API',
          label: 'EC2',
          stateAnnounced: 'IA',
          parentId: 'region_build.ec2!installec2',
          name: 'ec2ready',
          selfLink: '/api/v1/data/templatenode/region_build.ec2!installec2!m.ec2ready',
          parentLink: '/api/v1/data/actionsequencetemplate/region_build.ec2!installec2'
        }
      }
    },
    {
      id: 'region_build.ec2!installec2!m.start',
      label: 'start',
      data: {
        node: {
          id: 'region_build.ec2!installec2!m.start',
          nodeType: 'Milestone',
          description: '',
          predecessors: [
            'region_build.ec2!installec2!l.hardwareready'
          ],
          timerDurationMinutes: '0',
          milestoneType: 'Start',
          stateAnnounced: 'Complete',
          parentId: 'region_build.ec2!installec2',
          name: 'start',
          selfLink: '/api/v1/data/templatenode/region_build.ec2!installec2!m.start',
          parentLink: '/api/v1/data/actionsequencetemplate/region_build.ec2!installec2'
        }
      }
    }
  ];

  links = [
    {
      id: 'edge1',
      source: 'region_build.ec2!installec2!m.start',
      target: 'region_build.ec2!installec2!a.identifyservers'
    },
    {
      id: 'edge2',
      source: 'region_build.ec2!installec2!l.hardwareready',
      target: 'region_build.ec2!installec2!a.identifyservers'
    },
    {
      id: 'edge3',
      source: 'region_build.ec2!installec2!l.networkready',
      target: 'region_build.ec2!installec2!a.installagents'
    },
    {
      id: 'edge4',
      source: 'region_build.ec2!installec2!a.verifyserverstates',
      target: 'region_build.ec2!installec2!a.installagents'
    },
    {
      id: 'edge5',
      source: 'region_build.ec2!installec2!a.installagents',
      target: 'region_build.ec2!installec2!a.verifyagents'
    },
    {
      id: 'edge6',
      source: 'region_build.ec2!installec2!a.identifyservers',
      target: 'region_build.ec2!installec2!a.verifyserverstates'
    },
    {
      id: 'edge7',
      source: 'region_build.ec2!installec2!a.verifyagents',
      target: 'region_build.ec2!installec2!m.ec2ready'
    },
    {
      id: 'edge8',
      source: 'region_build.ec2!installec2!l.hardwareready',
      target: 'region_build.ec2!installec2!m.start'
    }
  ];
}

/*   nodes: Node[] = [
    {
      id: '1',
      label: 'Milestone ABCDEFGHIJK',
      data: {
        nodeType: 'Milestone',
        backgroundColor: '#99ccff',
        color: 'black',
      }
    },
    {
      id: '2',
      label: 'Task B',
      data: {
        nodeType: 'Task',
        backgroundColor: '#ff80ff',
        color: 'black'
      }

    },
    {
      id: '3',
      label: 'Task C',
      data: {
        nodeType: 'Task',
        backgroundColor: '#ff80ff',
        color: 'black'
      }

    },
    {
      id: '4',
      label: 'Task D',
      data: {
        nodeType: 'Task',
        backgroundColor: '#ff80ff',
        color: 'black'
      }

    },
    {
      id: '5',
      label: 'Task E',
      data: {
        nodeType: 'Task',
        backgroundColor: '#ff80ff',
        color: 'black'
      }

    },
     {
      id: '6',
      label: 'Milestone F',
       data: {
         nodeType: 'Milestone',
         backgroundColor: '#99ccff',
         color: 'black'
       }

    }
  ];

  links: Edge[] = [
    {
      id: 'a',
      source: '1',
      target: '2',
      label: 'Between 1 and 2'
    }, {
      id: 'b',
      source: '1',
      target: '3'
    }, {
      id: 'c',
      source: '3',
      target: '4',
      label: 'Between 3 & 4'
    }, {
      id: 'd',
      source: '3',
      target: '5'
    }, {
      id: 'e',
      source: '4',
      target: '5'
    }, {
      id: 'f',
      source: '2',
      target: '6'
    }
  ]; */
