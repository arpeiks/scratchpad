import { Root, Icon, Text } from "./sidebar-item.styles";

interface PROPS {
  icon: string;
  title: string;
}

const SidebarItem = ({ icon = "dashboard", title = "Dashboard" }: PROPS) => {
  return (
    <Root>
      <Icon className={`bx bxs-${icon}`} />
      <Text>{title}</Text>
    </Root>
  );
};

export default SidebarItem;
