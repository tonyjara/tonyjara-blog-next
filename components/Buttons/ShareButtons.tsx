import { HStack, Tooltip, Icon, useToast } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";
import { FiLink } from "react-icons/fi";
import {
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
import { IPost } from "../../interfaces/post";
import { WEB_URL } from "../../lib/constants";

const ShareButtons = (props: IPost) => {
  const { title } = props;
  const pathname = usePathname();
  const toast = useToast();

  const WEBPAGE_URL = `${WEB_URL}${pathname}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(WEBPAGE_URL);
    toast({
      title: "Link on clipboard!",
      status: "success",
      isClosable: true,
      duration: 2000,
      position: "top",
    });
  };
  return (
    <HStack alignSelf="center" alignItems="center" pt={5} spacing={[1, 3]}>
      <Tooltip hasArrow label="Share on whatsapp." bg="gray.300" color="black">
        <WhatsappShareButton url={WEBPAGE_URL} title={title} separator=":: ">
          <WhatsappIcon round size={25} />
        </WhatsappShareButton>
      </Tooltip>
      <Tooltip hasArrow label="Share on twitter." bg="gray.300" color="black">
        <TwitterShareButton url={WEBPAGE_URL} title={title}>
          <TwitterIcon round size={25} />
        </TwitterShareButton>
      </Tooltip>
      <Tooltip hasArrow label="Share on Facebook." bg="gray.300" color="black">
        <FacebookShareButton url={WEBPAGE_URL} title={title}>
          <FacebookIcon round size={25} />
        </FacebookShareButton>
      </Tooltip>
      <Tooltip hasArrow label="Copy link." bg="gray.300" color="black">
        <div style={{ marginTop: -1 }}>
          <Icon
            onClick={handleCopyLink}
            cursor={"pointer"}
            boxSize={6}
            as={FiLink}
            bgColor="gray.300"
            rounded={20}
            padding={1}
          />
        </div>
      </Tooltip>
    </HStack>
  );
};

export default ShareButtons;
