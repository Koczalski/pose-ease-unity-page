/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    'install',
    'quickstart',
    {
      type: 'category',
      label: 'Rig Controller',
      link: {type: 'doc', id: 'rig-controller/index'},
      items: ['rig-controller/display', 'rig-controller/ik-fk-mirror'],
    },
    'avatar-install',
    'comfort-analysis',
    'assist',
    'faq',
    'credits',
    'changelog',
  ],
};

export default sidebars;
