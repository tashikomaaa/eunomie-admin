/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Box } from "@chakra-ui/react";
import CheckTable from "views/admin/dataTables/components/CheckTable";
import {
  columnsDataCheck
} from "views/admin/dataTables/variables/columnsData";
import CreateModal from "components/createModal/CreateModal"
import tableDataCheck from "views/admin/dataTables/variables/tableDataCheck.json";
import React, { useState } from "react";

export default function Settings() {
  const [isOpen, setIsOpen] = useState(false)
  // Chakra Color Mode
  return (
    <>
      <Box pt={{ base: "130px", }}>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
      </Box>
      {/* <CreateModal isOpen={isOpen} onClose={setIsOpen(false)} /> */}
    </>
  );
}
