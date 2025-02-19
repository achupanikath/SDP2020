NOID Ecosystem is a sovereign identity management system that lets a user take complete control of their data solving for two of our society's biggest problems: Data leaks and abuse of power. NoID uses a custom blank card with a biometric fingerprint module issued to a member to communicate with a custom scanner that is issued to a merchant to trigger a valid data exchange. Both the member and the merchant log in to their corresponding NoID app accounts to perform the data sharing. The merchant only gets to ask questions as permitted by the tier based access privileges set by the merchant organization and the member can decide whether or not to approve to share the information to answer the merchant. Once the approval is given, using our encrypted databse-blockchain intelligence, we provide the minimal version of the data to the merchant to answer the question. The tamperproof environment created by the blockchain, along with various security features implemented at different levels of this project provide for a secure, sovereign and easy way to share information without compromising on indiviudal rights and succumbing to abuse of power.

# SDP2020

This is a basic framework for the server side funcitonality

1) Make sure you have npm and nodejs installed

2) Install docker and docker compose in your systems if you don't have it already

$ sudo apt-get update

$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

$ sudo apt-key fingerprint 0EBFCD88

$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

$ sudo apt-get update

$ sudo apt install docker-ce 

$ sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

$ sudo chmod +x /usr/local/bin/docker-compose

$ docker-compose --version

3)Clone the files into your local git directory

4)Put the docker-compose.yml file in the folder from discord

5)Open the terminal and run 'docker-compose up' to start the database 

6)Run the command 'npm run dev' in a separate terminal to start the backend

Setup and Install React-Native App

Have or install Node and NPM, at least Node 10 or newer.

1 Install JDK 8 

sudo apt-get install openjdk-8-jre

sudo apt-get install openjdk-8-jdk



2 Install Android Studio
Download from the following link
https://developer.android.com/studio

Once downloaded, extract the folder and navigate to the /bin folder in the extracted folder
execute ./studio.sh to start the installation wizard

Make sure the following are checked during installation:
    -Android SDK
    -Android SDK Platform
    -Android Virtual Device

If any of the boxes are grayed out, there will be a chance to install them later.

Open Android Studio and near the bottom right click Configure->SDK Manager
Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 10 (Q) entry, then make sure the following items are checked:

    -Android SDK Platform 29
    -Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 29.0.2 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.



3 Setup Environment Variables

Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc (if you are using zsh then ~/.zprofile or ~/.zshrc) config file:

export ANDROID_HOME=$HOME/Android/Sdk

export PATH=$PATH:$ANDROID_HOME/emulator

export PATH=$PATH:$ANDROID_HOME/tools

export PATH=$PATH:$ANDROID_HOME/tools/bin

export PATH=$PATH:$ANDROID_HOME/platform-tools

Type source $HOME/.bash_profile for bash or source $HOME/.zprofile to load the config into your current shell. Verify that ANDROID_HOME has been set by running echo $ANDROID_HOME and the appropriate directories have been added to your path by running echo $PATH.

Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.


4 Setting up Device+Running the App

Plug in USB cable connecting your PC to your phone

Go to Developer Options and enable USB debugging

Check the manufacturer code by using $ lsusb

You should be able to see your device if its connected proceeded by an 8 digit ID separated by a colon.

Input the first four digits of the ID into udev rules by running

echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="22b8", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules

Replace idVendor with first 4 digits of the ID.

Run $ adb devices, to check if the device is installed. Seeing "device" in the right column means the device is connected. You must have only one device connected at a time.

Now navigate to the folder containing appUI files from github, and run $npm install to get all the node_modules. 

Then run "$npx react-native start" to start the metro bundler

Once metro has been started and the phone connected, open a separate terminal and run "npx react-native run-android" to install and launch the app on your phone.

Note: This is just for testing the app on a physical phone, https://reactnative.dev/docs/environment-setup has more details for installing and running on an android emulator.

