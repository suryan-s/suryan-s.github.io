import 'package:flutter/material.dart';
import 'package:suryan/presentation/widgets/intro_buttons.dart';

import '../../../core/constants/constants.dart';
import '../../widgets/top_navigation_bar.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  double responsiveWidth(double width) {
    double calculatedWidth = width * 0.70 / 2;
    return calculatedWidth.clamp(50.0, 220.0);
  }

  EdgeInsets responsivePadding(double width) {
    double horizontalPadding;

    if (width < 550) {
      horizontalPadding = 40.0;
    } else {
      horizontalPadding = (width / 10).clamp(40.0, 80.0);
    }

    double verticalPadding = 10.0;
    return EdgeInsets.symmetric(
        horizontal: horizontalPadding, vertical: verticalPadding);
  }

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;

    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 34, 34, 34),
      body: Padding(
        padding: responsivePadding(width),
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              const SizedBox(
                height: 100,
                child: TopNavigationBar(),
              ),
              const SizedBox(
                height: 50,
              ),
              ConstrainedBox(
                constraints: BoxConstraints(
                  minWidth: 200,
                  maxWidth: MediaQuery.of(context).size.width * 0.8,
                ),
                child: Center(
                  child: Row(
                    mainAxisAlignment: width > 1290
                        ? MainAxisAlignment.spaceEvenly
                        : MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      CircleAvatar(
                        radius: width > 1290 ? 250 : responsiveWidth(width),
                        backgroundColor: Colors.grey.shade800,
                        child: CircleAvatar(
                          radius:
                              width > 1290 ? 220 : responsiveWidth(width) - 30,
                          backgroundImage: AssetImage(mainImage),
                        ),
                      ),
                      width > 1290
                          ? const SizedBox(
                              width: 80,
                            )
                          : const SizedBox(),
                      width > 1290 ? introContentWide() : const SizedBox()
                    ],
                  ),
                ),
              ),
              width < 1290 ? introContentSmall() : const SizedBox(),
              const SizedBox(
                height: 50,
              )
            ],
          ),
        ),
      ),
    );
  }

  SizedBox introContentWide() {
    return SizedBox(
        width: MediaQuery.of(context).size.width * 0.35,
        child: Center(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                "Full Stack Developer",
                style: TextStyle(color: Colors.white, fontSize: 20),
              ),
              const Text(
                "S Suryan",
                style: TextStyle(
                    color: Colors.orange,
                    fontSize: 80,
                    fontWeight: FontWeight.bold),
              ),
              Text(
                  introContent,
                style: const TextStyle(
                    fontSize: 24,
                    height: 1.5,
                    wordSpacing: 0.2,
                    color: Colors.white),
                textAlign: TextAlign.justify,
              ),
              const SizedBox(height: 20,),
              const IntroBtns(alignment: MainAxisAlignment.start),
            ],
          ),
        ));
  }

  SizedBox introContentSmall() {
    return SizedBox(
        width: MediaQuery.of(context).size.width * 0.75,
        child: Center(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const SizedBox(
                height: 20,
              ),
              const Text(
                "S Suryan",
                style: TextStyle(
                    color: Colors.orange,
                    fontSize: 40,
                    fontWeight: FontWeight.bold),
              ),
              const SizedBox(
                height: 20,
              ),
              Text(
                introContent,
                style: const TextStyle(
                    fontSize: 20,
                    wordSpacing: 0.2,
                    height: 1.5,
                    color: Colors.white),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 20,),
              const IntroBtns(alignment: MainAxisAlignment.center,),
            ],
          ),
        ));
  }
}
