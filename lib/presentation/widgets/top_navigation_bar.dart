import 'package:flutter/material.dart';

import '../../core/constants/constants.dart';

class TopNavigationBar extends StatefulWidget {
  const TopNavigationBar({
    super.key,
  });

  @override
  State<TopNavigationBar> createState() => _TopNavigationBarState();
}

class _TopNavigationBarState extends State<TopNavigationBar> {
  int selectedSection = 1;
  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    return Row(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        const CircleAvatar(
          radius: 25,
          backgroundColor: Colors.black,
          child: Center(
            child: Text(
              "S",
              style: TextStyle(color: Colors.orange, fontSize: 25),
            ),
          ),
        ),
        const SizedBox(
          width: 30,
        ),
        Padding(
          padding: const EdgeInsets.only(bottom: 25.0),
          child: RichText(
            text: const TextSpan(
              children: [
                TextSpan(
                  text: 'Suryan',
                  style: TextStyle(color: Colors.white, fontSize: 30),
                ),
                TextSpan(text: ' '),
                TextSpan(
                  text: '.',
                  style: TextStyle(color: Colors.orange, fontSize: 60),
                ),
              ],
            ),
          ),
        ),
        const Spacer(),
        const SizedBox(
          width: 20,
        ),
        width > 800
            ? Wrap(
                spacing: 20,
                children: [
                  navBarButton("About Me", 1),
                  navBarButton("LinkedIn", 2),
                  navBarButton("Skills", 3),
                  navBarButton("Contact", 4),
                ],
              )
            : const SizedBox(
                width: 50,
                child: IconButton(
                    onPressed: null,
                    icon: Icon(
                      Icons.menu_rounded,
                      color: Colors.white,
                      size: 30,
                    )),
              )
      ],
    );
  }

  TextButton navBarButton(String title, int index) {
    return TextButton(
      onPressed: () {
        setState(() {
          selectedSection = index;
        });
      },
      child: Text(
        title,
        style: TextStyle(
          color: selectedSection == index ? Colors.orange : Colors.white,
          fontSize: topNavButtonFontSize,
          fontWeight: selectedSection == index ? FontWeight.bold : FontWeight.w400,
        ),
      ),
    );
  }
}
