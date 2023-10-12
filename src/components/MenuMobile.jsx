import {
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { menuItems } from "../lib/menuItems";

export default function MenuMobile() {
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4">
        <Button className="px-3 py-2" onClick={openDrawerRight}>
          <AiOutlineMenuFold size="20px" />
        </Button>
      </div>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            MENU
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Menu>
          {menuItems.map((item, i) => (
            <div key={i}>
              <MenuItem>{item.title}</MenuItem>
            </div>
          ))}
          <hr className="my-3" />
          <Button color="red" size="sm" className="items-center ">
            <h2 className="">상담신청하기</h2>
          </Button>
        </Menu>
      </Drawer>
    </React.Fragment>
  );
}
